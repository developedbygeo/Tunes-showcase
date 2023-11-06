export const generateSequenceFromArray = (array: (string | number)[] | undefined, delay: number) => {
    if (!array || !array.length) return [];

    return array.flatMap((item) => {
        return [item, delay];
    });
};

export const extractYearFromDate = (date: Date) => new Date(date).getFullYear();
