// This is the typescript for my full CV data

export interface  Contracts {
  company_name?: string,
  company_role?: string,
  company_address?: string,
  contract_start?: string,
  contract_end?: string,
  contract_description?: string,
  contract_technology?: Technology;
}

export interface  Technology {
  [index:number]:string;
}


export interface CvFull {
  name?: string;
  personal_details?: {
    name: string,
    nationality: string,
    phone_no: number,
  };
  contact_details?: {
    address_line_1: number,
    address_line_2: string,
    address_line_3: string,
    post_code: string,
  };
  contracts: {
    [index:number]:Contracts;

  }

}
