var EntryForm = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired
    },

    componentWillMount: function () {
        if (this.props.initialState) {
            this.setState(this.props.initialState);
        }
    },

    renderEntryCategoriesCheckboxes: function () {
        return this.props.categories.map(function (category, i) {
            var placement = null;
            this.state.placements.forEach(function (p) {
                if (p.category.id === category.id) {
                    placement = p;
                }
            });

            return <EntryCategoriesCheckbox
                key={'categories-'+category.id}
                category={category}
                placement={placement}/>
        }.bind(this));
    },

    render: function () {
        return (
            <div>
                <div className="field">
                   {this.renderEntryCategoriesCheckboxes()}
                </div>
                <div className="field">
                    <label htmlFor="entry_title">Title</label><br />
                    <input id="entry_title"
                           name="entry[title]"
                           type="text"
                           defaultValue={this.state.title}/>
                </div>
                <div className="field">
                    <label htmlFor="entry_body">Body</label><br />
                    <textarea id="entry_body"
                              name="entry[body]"
                              defaultValue={this.state.body}/>
                </div>
            </div>
        );
    }
});
