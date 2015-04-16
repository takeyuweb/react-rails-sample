var EntryForm = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired
    },

    componentWillMount: function () {
        if (this.props.initialState) {
            this.setState(this.props.initialState);
            console.log(this.props.initialState);
        }
    },

    handleCategoryChanged: function (categoryId, params) {
        var placement;
        var placements = this.state.placements;
        placements.forEach(function (p) {
            if (p.category.id === categoryId) {
                placement = p;
            }
        });

        if (placement) {
            if (placement.id) {
                placement._destroy = !params.value;
            }
        } else {
            if (params.value) {
                placement = {
                    category: {
                        id: categoryId
                    }
                };
                placements.push(placement);
            }
        }
        this.setState({placements: placements});
    },

    renderCategorySelection: function () {
        return this.props.categories.map(function (category, i) {
            var placement = null;
            this.state.placements.forEach(function (p) {
                if (p.category.id === category.id) {
                    placement = p;
                }
            });

            var form = this;
            var onChangeClosure = function (params) {
                form.handleCategoryChanged(category.id, params);
            };

            return <EntryCategoryInput
                key={'categories-'+category.id}
                category={category}
                placement={placement}
                onChange={onChangeClosure}/>
        }.bind(this));
    },

    render: function () {
        return (
            <div>
                <div className="field">
                   {this.renderCategorySelection()}
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
