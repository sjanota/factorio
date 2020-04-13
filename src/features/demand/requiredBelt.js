export const BeltTypes = {
  Normal: "Normal",
  Fast: "Fast",
  Express: "Express",
  Overloaded: "Overloaded",
};

export function requiredBelt(targetSupply) {
  if (targetSupply <= 15 * 60) return BeltTypes.Normal;
  else if (targetSupply <= 30 * 60) return BeltTypes.Fast;
  else if (targetSupply <= 45 * 60) return BeltTypes.Express;
  else return BeltTypes.Overloaded;
}
