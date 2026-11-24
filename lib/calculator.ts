/**
 * Safe arithmetic for the calculator tool. No eval: a small parser for
 * numbers, + - * / % ^, parentheses and unary minus.
 */
export function calculate(expression: string): number {
    const src = expression.replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/');
    if (!src) throw new Error('Empty expression');
    if (src.length > 200) throw new Error('Expression too long');
    let i = 0;

    const peek = () => src[i];
    const eat = (ch: string) => {
        if (src[i] === ch) {
            i++;
            return true;
        }
        return false;
    };

    function number(): number {
        const start = i;
        while (i < src.length && /[0-9.]/.test(src[i])) i++;
        const text = src.slice(start, i);
        if (!text || !/^\d*\.?\d+$|^\d+\.$/.test(text)) throw new Error(`Unexpected "${src[start] ?? 'end'}" at ${start + 1}`);
        return Number(text);
    }

    function factor(): number {
        if (eat('-')) return -factor();
        if (eat('+')) return factor();
        if (eat('(')) {
            const v = sum();
            if (!eat(')')) throw new Error('Missing )');
            return v;
        }
        return number();
    }

    function power(): number {
        const base = factor();
        if (eat('^')) return base ** power();
        return base;
    }

    function product(): number {
        let v = power();
        for (;;) {
            if (eat('*')) v *= power();
            else if (eat('/')) {
                const d = power();
                if (d === 0) throw new Error('Division by zero');
                v /= d;
            } else if (eat('%')) v %= power();
            else return v;
        }
    }

    function sum(): number {
        let v = product();
        for (;;) {
            if (eat('+')) v += product();
            else if (eat('-')) v -= product();
            else return v;
        }
    }

    const result = sum();
    if (i < src.length) throw new Error(`Unexpected "${peek()}" at ${i + 1}`);
    if (!Number.isFinite(result)) throw new Error('Result is not a finite number');
    return result;
}
