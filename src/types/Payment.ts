interface Payment {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  amount: {
    currency: string;
    total: number;
  };
  method: string;
}

export default Payment;
