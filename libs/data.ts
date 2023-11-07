export const generateSequenceFromArray = (array: (string | number)[] | undefined, delay: number) => {
    if (!array || !array.length) return [];

    return array.flatMap((item) => {
        return [item, delay];
    });
};

export const extractYearFromDate = (date: Date) => new Date(date).getFullYear();

export const parseDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
