export class Likes 
{
    names = [];

    constructor(names)
    {
        this.names = names;
    }

    getLikes()
    {
        let likesCounter = '';

        switch (this.names.length) 
        {
            case 0:
                likesCounter = 'no one likes this';
                break;
            case 1:
                likesCounter = this.names[0] + " likes this";
                break;
            case 2:
                likesCounter = `${this.names[0]} and ${this.names[1]} like this`;
                break;
            case 3:
                likesCounter = `${this.names[0]}, ${this.names[1]} and ${this.names[2]} like this`;
                break;
            default:
                likesCounter = `${this.names[0]}, ${this.names[1]} and ${this.names.length - 2} others like this`;
                break;  
        }
        return likesCounter;
    }
}

