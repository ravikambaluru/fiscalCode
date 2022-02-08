const fiscalGenerator = function (req, res) {
    const body = req.body;
    let fiscalCode = '';


    const consLen1=countfind(body.surname,'consonants');
    const consLen2=countfind(body.name,'consonants');
    const vowsLen1=countfind(body.surname,'vowels');
    const vowsLen2=countfind(body.name,'vowels');

    fiscalCode += partOneCode(body.surname,consLen1,vowsLen1,'surname');
    fiscalCode += partOneCode(body.name, consLen2,vowsLen2,'uname');
    fiscalCode += dobGenCode(body.dateOfBirth, body.gender);

    res.status(200).json({
        "status": "SUCCESS",
        "statusCode": 200,
        message: fiscalCode.toUpperCase()
    });

};


const countfind = (string,type) => {
  if (type=='consonants') {
      const consonants=filterConsonants(string);
      return consonants===null ? 0 : consonants.length;
      
  }if (type=='vowels'){
    const v=filterOvels(string);
    return v===null ? 0 : v.length; 
  }  
}


const partOneCode = (string, consLen,vowsLen,mode) => {
    let finalString = "";
    let cons = filterConsonants(string);
    let vow = filterOvels(string);
    if (string.length < 3) {
        for (let x = 0; x < consLen; x++){
            finalString += cons[x];
        }
        for (let y = 0; y < vowsLen; y++){
            
            finalString += vow[y];
        }
        for (let index = finalString.length; index < 3; index++){
            finalString += 'x';
        }
        return finalString;
    } else {
        if (mode=='surname' && consLen >=3) {
            for (let index = 0; index < 3; index++)
            finalString += cons[index];
            return finalString;
        }
        if (consLen > 3) {
            
            finalString += cons[0] += cons[2] += cons[3];
            return finalString;
        }
        if (consLen == 3 && mode=='uname') {

            for (let index = 0; index < 3; index++)
                finalString += cons[index];
            return finalString;
        }

        else {
            for (let index = 0; index < consLen; index++)
                finalString += cons[index];
            for (let index = 0; finalString.length < 3; index++)
                finalString += vow[index];
            return finalString;
        }
    }
};

const dobGenCode = (dob, gender) => {
    let finalString = "";
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    const [month, date, Year] = dob.split("/");
    finalString += Year.split('')[2] += Year.split('')[3];

    let idx = months.findIndex(val => val == month.toLowerCase());
    finalString += String.fromCharCode(65 + idx);

    if (gender.toLowerCase() == 'male') {
        if (date < 10) {
            return finalString += "0" + date;
        }
        return finalString += date;
    }

    if (gender.toLowerCase() == 'female') {
        let d = parseInt(date, 10);
        d += 40
        return finalString += d;
    }

};
const filterConsonants = string => string.match(/[^aeiou]/gi);

const filterOvels = string => string.match(/[aeiou]/gi);

module.exports = fiscalGenerator;