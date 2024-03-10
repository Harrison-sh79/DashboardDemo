import { UniqueIdentifier } from "@dnd-kit/core";

export type CardType = {
  id: string;
  dnd: UniqueIdentifier;
  title: string;
  icon: string;
  data: string;
  desc: string;
};
