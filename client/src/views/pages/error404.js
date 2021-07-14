const error404 = {
  render: async () => {
    const view = /* html */ `
              <section class="section">
                  <h1> 404 Error </h1>
              </section>
          `;
    return view;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted
  afterRender: async () => {},
};
export default error404;
