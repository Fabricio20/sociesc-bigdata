<header class="sticky">
    <div class="corner">
        <!-- Link -->
    </div>
    <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"/>
        </svg>
        <ul>
            <li>
                <a sveltekit:prefetch href="/">Home</a>
            </li>
            <li>
                <a href="/#totals">No Total</a>
            </li>
            <li>
                <a href="/#expectancy">Expectativa de Vida</a>
            </li>
            <li>
                <a href="/#suicide">Saúde Mental</a>
            </li>
            <li>
                <a href="/#homicide">Homicídios</a>
            </li>
            <li>
                <a href="/#dengue">Dengue</a>
            </li>
            <li>
                <a href="/#tuberculose">Tuberculose</a>
            </li>
            <li>
                <a href="/#renais">Doenças Renais</a>
            </li>
            <li>
                <a sveltekit:prefetch href="/about">Sobre</a>
            </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"/>
        </svg>
    </nav>
    <div class="corner">
        <!-- TODO put something else here? github link? -->
    </div>
</header>

<style>
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    header {
        display: flex;
        justify-content: space-between;
    }

    .corner {
        width: 3em;
        height: 3em;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        fill: var(--background);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 1em;
        color: var(--heading-color);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--accent-color);
    }
</style>
