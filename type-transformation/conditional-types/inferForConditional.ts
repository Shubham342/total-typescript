import { Equal, Expect } from "../../helpers/type-utils";

type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

type GetDataValueV2<T> = T extends { data: infer TInferedData }
  ? TInferedData
  : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  Expect<Equal<GetDataValue<string>, never>>
];
