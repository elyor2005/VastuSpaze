import { REVIEWS } from "../constants/index.js";

const Reviews = () => {
  return (
    <search className="max-w-7xl  mx-auto border-b-2" id="reviews">
      <div className="my-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl lg:text-lg mb-12 tracking-tight text-center uppercase">
            Reviews
          </h2>
          <p className="max-w-2xl text-lg mb-12 text-center max-auto ">
            {REVIEWS.text}
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {REVIEWS.reviews.map((review, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs"
            >
              <p className="mb-4">{review.review}</p>
              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt="image"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="text-sm text-neutral-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </search>
  );
};

export default Reviews;
