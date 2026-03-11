let people = [
    {
        "id": "276",
        "name": "Mark Johnson",
        "email": "mark.j@webmail.com",
        "newsletter": false
    },
    {
        "id": "365",
        "name": "John Smith",
        "email": "smith.john@provider.com",
        "newsletter": true
    },
    {
        "id": "445",
        "name": "Alex Reed",
        "email": "alex.reed@company.org",
        "newsletter": false
    },
    {
        "id": "567",
        "name": "Ann Taylor",
        "email": "ann.taylor@social.com",
        "newsletter": true
    },
    {
        "name": "Anny Wallis",
        "email": "annyanny@gmail.com",
        "newsletter": true,
        "id": "eD_TWbh"
    },
    {
        "name": "Mark Twain",
        "email": "Twain@mark.pl",
        "newsletter": false,
        "id": "rmzG9CH"
    }
]


export async function GET() {
    return new Response(JSON.stringify(people), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}


export async function POST(request) { // <--- Tutaj musisz przyjąć 'request' jako argument!
    try {
        const body = await request.json(); // <--- Teraz 'request' jest już zdefiniowany

        const newPerson = {
            ...body,
            id: body.id || Math.random().toString(36).substr(2, 9)
        };

        people.push(newPerson);

        return new Response(JSON.stringify(newPerson), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) { //
        return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
            status: 400
        });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Musiałabyś zmienić sposób wywołania w serwisie

    // Filtrowanie listy
    people = people.filter(p => p.id !== id);

    return new Response(null, { status: 204 });
}