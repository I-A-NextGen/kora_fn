const months = [
  "Mutarama",
  "Gashyantare",
  "Werurwe",
  "Mata",
  "Gicurasi",
  "Kamena",
  "Nyakanga",
  "Kanama",
  "Nzeli",
  "Ukwakira",
  "Ugushyingo",
  "Ukuboza",
];

const weekDays = [
  "Ku wa Mbere",
  "Ku wa Kabiri",
  "Ku wa Gatatu",
  "Ku wa Kane",
  "Ku wa Gatanu",
  "Ku wa Gatandatu",
  "Ku Cyumweru",
];

export const formatDateDay = (day: number) => weekDays[day-1] ?? "";

export const formatDateMonth = (month: number, short: boolean) => {
  if (months[month]) {
    return short ? months[month].slice(0, 5) : months[month];
  }
  return "";
};
