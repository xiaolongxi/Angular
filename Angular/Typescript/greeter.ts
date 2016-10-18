/*interface StringValidator{
	isAcceptable(s:string):boolean;
}

let letterRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LetterOnlyValidator implements StringValidator{
	isAcceptable(s:string){
		return letterRegexp.test(s);
	}
}

class ZipCodeValidator implements StringValidator{
	isAcceptable(s:string){
		return s.length === 5 && numberRegexp.test(s);
	}
}

let strings = ["Hello","98052","101"];

let validators : {[s:string]:StringValidator} = {};

validators['Zip Code'] = new ZipCodeValidator();
validators['Letter Only'] = new LetterOnlyValidator();

strings.forEach(s=>{
	for(let name in validators){
		console.log("'"+s+"'"+(validators[name].isAcceptable(s)?"matches,":"does not match,")+name);
	}
})*/

/*namespace Validators{
	export interface StringValidator{
		isAcceptable(s:string):boolean;
	}

	const letterRegexp = /^[A-Za-z]+$/;
	const numberRegexp = /^[0-9]+$/;
	export class LetterOnlyValidator implements StringValidator{
		isAcceptable(s:string){
			return letterRegexp.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator{
		isAcceptable(s:string){
			return s.length === 5 && numberRegexp.test(s);
		}
	}
}

let strings = ["Hello","98052","101"];

let validators : {[s:string]:Validators.StringValidator}={}
validators["Zip Code"] = new Validators.ZipCodeValidator();
validators["Letter Only"] = new Validators.LetterOnlyValidator();

strings.forEach(s=>{
	for(let name in validators){
		console.log(`"${s}"-${validators[name].isAcceptable(s)?"matches":"does not match"} ${name}`)
	}
})*/

/*declare namespace D3{
	export interface Selectors{
		select:{
			(selector:string):Selection;
			(element:EventTarget):Selection;
		};
	}
	export interface Event{
		x:number;
		y:number;
	}
	export interface Base extends Selectors{
		event:Event;
	}
}

declare let d3:D3.Base;
*/

