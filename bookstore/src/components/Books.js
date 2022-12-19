export default function Books(props) {
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <h1>Welcome to the bookstore, what are you looking for?</h1>
      <p className="recs">
        Try to search the keyword of <strong>Javascript</strong> or whatever
        keyword you want!
      </p>
      <div className="wrapper_input">
        <input id="search" type="text" placeholder="Type the keyword here..." />
        <button type="submit" onClick={props.loadBooks}>
          Search
        </button>
      </div>

      <div id="books" style={{ display: props.toggle }}>
        <div className="inner_book-release">
          <img src={props.imgurl} />
          <div className="description">
            <h1>${props.title}</h1>
            <p className="pb">
              <span className="published">Published on {props.publish}</span>
            </p>
            {props.desc}
          </div>
        </div>

        {/* <!-- :-) -->
        <!--     <div class="book-release">
            <div class="inner_book-release">
              <img id="img_url" src="#">
              <div class="description">
                <h1 id="title"></h1>
                <p id="published"></p>
                <p id="desc"></p>
              </div>
            </div>
          </div> -->
        <!-- :-^) --> */}
      </div>
    </section>
  );
}
