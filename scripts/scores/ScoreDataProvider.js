const scores = [
    {
        id:1,
        date: 12982304981263058174,
        teamId: 1,
        score: 37
    },
    {
        id:2,
        date: 12982304981263058174,
        teamId: 2,
        score: 54,
    },
    {
        id: 3,
        date: 12982304981263058174,
        teamId: 3,
        score: 7
    },
    {
        id:4,
        date: 12982304981263058191,
        teamId: 1,
        score: 18
    },   
    {
        id:5,
        date: 12982304981263058191,
        teamId: 2,
        score: 37
    },
    {
        id:6,
        date: 12982304981263058191,
        teamId: 3,
        score: 54
    },
]

export const useScores = () => {
    return scores.slice()
}