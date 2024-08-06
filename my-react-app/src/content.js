
const content = () => {
    const nameChange = () => {
        const name = ["Aviral", "Avi", "sheesh"];
        const int = Math.floor(Math.random() * 3);
        return name[int];
      }

    return (
        <main>
            <p>
                Hello, {nameChange()}!
            </p>
        </main>
    )
}

export default content