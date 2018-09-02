export class CharacterSheet {


  
   constructor(
    public   name: string,
	public playerName: string,
    public alignment: string,
	public level: number,
	public hp: number,
	public strength: Array<number>,
	public dexterity: Array<number>,
	public constitution: Array<number>,
	public intelligence: Array<number>,
	public wisdom: Array<number>,
	public charisma: Array<number>,
	public race?: string
  ) {  }
}