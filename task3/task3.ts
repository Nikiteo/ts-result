const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface PlaceholderComment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

const getData = async (
	url: string
): Promise<PlaceholderComment[] | undefined> => {
	try {
		const res = await fetch(url)
		const comments = await res.json()
		return comments as Promise<PlaceholderComment[]>
	} catch (err: unknown) {
		console.log(err)
	}
}

getData(COMMENTS_URL).then(data => {
	data?.forEach(comment => {
		console.log(`ID: ${comment.id}, Email: ${comment.email}`)
	})
})
