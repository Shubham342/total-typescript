import { Equal, Expect } from "../../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type StringWithId = `${string}${"id" | "Id"}${string}`

type OnlyIdKeys<T extends {}> = {
  [K in keyof T as K extends StringWithId ? K : never]: T[K];
};

type g = OnlyIdKeys<Example>;

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
