interface StringIndexable {
  [name: string]: string;
}

export interface SalesData extends StringIndexable {
  viewingDate: string;
  location: string;
  flatNumber: string;
  applicantName: string;
  reason: string;
  notes: string;
}
