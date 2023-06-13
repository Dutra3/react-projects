class ProjectService {

    getProjectData = (id: string | undefined) => {
        return fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    getProjectsData = () => {
        return fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    };

    createProject = (project: object) => {
        return fetch('http://localhost:5000/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		})
    };

    updateProject = (project: object) => {
        return fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
    };

    deleteProject = (id: number) => {
        return fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}

export default new ProjectService();