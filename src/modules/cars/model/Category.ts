import { v4 as uuidV4 } from 'uuid';

class Category {
  // eslint-disable-next-line prettier/prettier
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
