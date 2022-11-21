export const Input = () => {
    return (
        <section className="input" id="input">
            <div className="input__entry">
                <form action="submit">
                    <input type="text" placeholder="Shorten a link here..." />
                    <button type="submit">Shorten It!</button>
                </form>
            </div>
        </section>
    );
};
