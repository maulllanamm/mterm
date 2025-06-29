export interface Certificate {
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  userId: string;
  name: string;
  issuedBy: string;
  dateIssued: string;
  url: string;
}
