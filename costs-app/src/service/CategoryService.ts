class CategoryService {

    getCategoriesData = () => {
        return fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    };
}

export default new CategoryService();