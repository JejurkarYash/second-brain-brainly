


export const generateHash = (len: number) => {

    const options = "abcdefghijklmnopqrstuvwxyz1234567890";
    const length = options.length;

    let hash = "";

    for (let i = 0; i < len; i++) {

        hash += options[Math.floor(Math.random() * length)]
    }

    return hash;
}

