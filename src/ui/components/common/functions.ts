export function thousandstoK(num: number): string | number {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1))}k`
    : Math.sign(num) * Math.abs(num);
}

export function getRelativeTime(d1: Date): string | void {
  return d1.toString().substring(0, 3);

  /* type tUnits = {
    [key: string]: number;
  };

  const d2 = new Date();

  const units: tUnits = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const elapsed = d1.getTime() - d2.getTime();
  // "Math.abs" accounts for both "past" & "future" scenarios

  Object.entries(units).forEach(([key, value]) => {
    if (Math.abs(elapsed) > value || key === "second") {
      console.log(Math.abs(elapsed), "----", value, key)
      return rtf.format(
        Math.round(elapsed / value),
        key as Intl.RelativeTimeFormatUnit
      );
    }

    return "time unknown";
  }); */
}
