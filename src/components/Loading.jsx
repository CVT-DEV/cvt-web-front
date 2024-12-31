
export default function Loading(props) {
    return(
        <div class="loading" style={ props.query ? styles.loading : null } role="progressbar" aria-label="carregando exemplo indeterminado pequeno"></div>
    )
}

const styles = {
    loading: {
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
}