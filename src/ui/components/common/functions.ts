export function thousandstoK(num: number) {
  return Math.abs(num) > 999
    ? Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1)) + "k"
    : Math.sign(num) * Math.abs(num);
}

export function getRelativeTime(d1: Date) {
  type tUnits = {
    [key: string]: number;
  };

  let d2 = new Date();

  const units: tUnits = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };
  let rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  let elapsed = d1.getTime() - d2.getTime();
  // "Math.abs" accounts for both "past" & "future" scenarios
  for (let u in units)
    if (Math.abs(elapsed) > units[u] || u === "second")
      return rtf.format(
        Math.round(elapsed / units[u]),
        u as Intl.RelativeTimeFormatUnit
      );
}
