interface iSelectOptions{
    id: number;
    name: string;
}
export interface iSelectElement {
  headerText: string;
  options: iSelectOptions[];
  onSelect: (value: string | number | null) => void
}
