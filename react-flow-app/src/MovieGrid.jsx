function MovieGrid({movieCard})
{
    
        return(
            <>
             
             <p>{movieCard.id}</p>
             <p>{movieCard.title}</p>
             <p>{movieCard.director}</p>
            </>

        )
    }

export default MovieGrid;