// https://millsp.github.io/ts-toolbelt/modules/string_split.html
import { Equal, Expect } from "../../helpers/type-utils";
import { Split } from "ts-toolbelt/out/String/Split";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];
