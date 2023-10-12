
function Node(text, children) {
    var self = this;
    //bool, expanded or no
    self.expanded = ko.observable(false);
    self.text = ko.observable(text);
    self.children = ko.observableArray(children);

    self.canExpand = ko.computed(() => {
        return !this.expanded() && this.children().length > 0;
    });

    /*self.checked = ko.computed(null);*/
    self.isChecked = ko.computed(() => {
        let checked = self.expanded();
        if (checked) {
            return true;
        }
        else return false;
    })
}

const nodes = [new Node('Root', [
    new Node('Item 1', []),
    new Node('Item 2', [
        new Node('Item 2.1', [
            new Node('Item 2.1.1', [])
        ]),
        new Node('Item 2.2', [])
    ]),
    new Node('Item 3', [])

])];