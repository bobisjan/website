let year;

export default function currentYear() {
  year = year || new Date().getFullYear();
  return year;
}
