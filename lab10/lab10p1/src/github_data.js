export function GitHubRepoURL({url}){
    return (
        <>
            <a href={url}>
                <h2>Ekkaphume Prasert</h2> 
            </a>
        </>
    )
}

export function GitHubAvatar({imgUrl, alt, size = 50}){
    return (
        <>
            <img src={imgUrl} alt={alt} width={size} height={size}/>
        </>
    )
}