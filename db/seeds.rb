users = User.create([{ name: 'Joe', surname: 'Doe', email: 'joe@email.com' }, { name: 'Alex', surname: 'Flower', email: 'alex@email.com' }])
Note.create(text: 'This is the first note', user: users.first)
Note.create(text: 'This is the second note', is_url: true, user: users.last)