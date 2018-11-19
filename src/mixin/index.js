export const userPlaceholderImage = 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541506955/user-placeholder.png';
export const articlePlaceholderImage = 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541513674/Authors%20Haven/article-placeholder.jpg';
export const spinner = 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/Spinner-1s.gif';
export const filterReactions = (reactions) => {
  const likes = reactions.filter((eachLike) => eachLike.reaction === 1);
  const dislikes = reactions.filter((eachLike) => eachLike.reaction === -1);
  return {
    likes: likes.length,
    dislikes: dislikes.length,
  };
};
