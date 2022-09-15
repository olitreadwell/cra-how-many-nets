import React from "react";
import { EmojiConvertor } from "emoji-js";

function convertToNets(multi) {
  const emoji = new EmojiConvertor();
  return emoji.replace_colons(":mosquito:").repeat(multi);
}

export default function Mosquito() {
  return <div>{convertToNets(25)}</div>;
}
