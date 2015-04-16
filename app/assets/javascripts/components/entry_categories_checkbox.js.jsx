var EntryCategoriesCheckbox = React.createClass({
    propTypes: {
        category: React.PropTypes.object.isRequired,
        placement: React.PropTypes.object,
        onChange: React.PropTypes.func
    },

    getInitialState: function () {
        var checked = false;
        if (this.props.placement) {
            if (this.props.placement.id) {
                checked = !this.props.placement.destroy;
            } else {
                checked = true;
            }
        }
        return {
            checked: checked
        };
    },

    handleChange: function (event) {
        this.setState({
            checked: event.target.checked
        });
        this.props.onChange({value: event.target.checked});
    },

    renderHiddenFields: function () {
        if (this.props.placement &&
            this.props.placement.id) {
            var idFieldName = 'entry[placements_attributes][' + this.props.category.id + '][id]';
            var destroyFieldName = 'entry[placements_attributes][' + this.props.category.id + '][_destroy]';
            if (this.state.checked) {
                return (
                    <div style={{display: 'inline', height: 0, width: 0}}>
                        <input type="hidden"
                               name={idFieldName}
                               value={this.props.placement.id} />
                        <input type="hidden"
                               name={destroyFieldName}
                               value="false" />
                    </div>
                );
            } else {
                return (
                    <div style={{display: 'inline', height: 0, width: 0}}>
                        <input type="hidden"
                               name={idFieldName}
                               value={this.props.placement.id} />
                        <input type="hidden"
                               name={destroyFieldName}
                               value="true" />
                    </div>
                );
            }
        }
        return;
    },

    render: function () {
        var name = 'entry[placements_attributes][' + this.props.category.id + '][category_id]';
        return (
            <label>
                <input type="checkbox"
                       name={name}
                       value={this.props.category.id}
                       checked={this.state.checked}
                       onChange={this.handleChange} />
                {this.renderHiddenFields()}
                {this.props.category.label}
            </label>
        );
    }
});
