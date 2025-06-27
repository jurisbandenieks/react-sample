import { atom } from "jotai";
import type { UserModel } from "@/types";

// 1. Atom for data centralisation
export const userAtom = atom<UserModel[]>([]);
