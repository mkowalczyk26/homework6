const translations = {
    en: {
      greet: "Hello",
      intro: "Welcome to our website"
    },
    fr: {
      greet: "Bonjour",
      intro: "Bienvenue sur notre site web"
    }
  };

function localize(strings, ...keys) {
    let str = strings[0];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const translation = translations[language][key];
        str += translation + strings[i + 1];
    }
    return str;
}


const language = "en";
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);





function highlightKeywords(template, keywords) {
    const parts = template.split(/\${\d+}/);

    const processed = [];
    parts.forEach((part, index) => {
        processed.push(part);

        if (index < keywords.length) {
            processed.push(`<span class='highlight'>${keywords[index]}</span>`);
        }
    });

    const highlighted = processed.join('');

    return highlighted;
}


const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);







function multiline(strings, ...values) {
    const template = strings.reduce((result, str, i) => {
        return result + str + (values[i] || '');
    }, '');

    const lines = template.split('\n');

    const numberedLines = lines.map((line, index) => {
        if (index === 0 || index === lines.length - 1) {
            return line;
        } else {
            const lineNumber = index;
            return `${lineNumber} ${line}`;
        }
    });

    return numberedLines.join('\n');
}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);




function curry(func, arity) {
    const args = [];

    function curried(...newArgs) {
        args.push(...newArgs);

        if (args.length >= arity) {
            return func(...args.slice(0, arity));
        } else {
            return curried;
        }
    }

    return curried;
}
  
function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const result = step2(4);

console.log("Result:", result);



