
export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {id: 'card-1',boardId: 'board-1',columnId: 'column-1', title: 'Title card 1', cover: 'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
                        {id: 'card-2',boardId: 'board-1',columnId: 'column-1', title: 'Title card 2', cover: null },
                        {id: 'card-3',boardId: 'board-1',columnId: 'column-1', title: 'Title card 3', cover: null },
                        {id: 'card-4',boardId: 'board-1',columnId: 'column-1', title: 'Title card 4', cover: null },
                        {id: 'card-5',boardId: 'board-1',columnId: 'column-1', title: 'Title card 5', cover: null },
                        {id: 'card-6',boardId: 'board-1',columnId: 'column-1', title: 'Title card 6', cover: null },
                        {id: 'card-7',boardId: 'board-1',columnId: 'column-1', title: 'Title card 7', cover: null },
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Inprogress',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {id: 'card-8',boardId: 'board-1',columnId: 'column-2', title: 'Title card 8', cover: null },
                        {id: 'card-9',boardId: 'board-1',columnId: 'column-2', title: 'Title card 9', cover: null },
                        {id: 'card-10',boardId: 'board-1',columnId: 'column-2', title: 'Title card 10', cover: null },
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done',
                    cardOrder: ['card-12', 'card-13', 'card-11'],
                    cards: [
                        {id: 'card-11',boardId: 'board-1',columnId: 'column-3', title: 'Title card 11', cover: null },
                        {id: 'card-12',boardId: 'board-1',columnId: 'column-3', title: 'Title card 12', cover: null },
                        {id: 'card-13',boardId: 'board-1',columnId: 'column-3', title: 'Title card 13', cover: null },
                    ]
                }
            ]
        }
    ]
}