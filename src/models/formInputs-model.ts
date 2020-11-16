interface StringIndexable {
  [name: string]: string
}

export interface FormInputs extends StringIndexable {
  viewingDate: string
  location: string
  flatNumber: string
  applicantName: string
  reason: string
  notes: string
}
