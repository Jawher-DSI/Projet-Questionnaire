import { Answer } from './answer';
export class Question{
    constructor(public questionName:string,public typeques:string,public type:string,public answer:Array<Answer>){}
}