export class speaker {
  public href: string;
  public data: data[];
 public links: links[];

}
export class session {
  public href: string;
  public data: data[];
 public links: links[];

}

export class data {
  public name: string;
  public value: string;


}

export class links {
  public rel: string;
  public href: string;
}
