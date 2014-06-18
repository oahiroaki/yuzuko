#include <stdio.h>

void push_list(struct yu_list *list, struct yu_node *push_node)
{
	struct yu_node *node, *swap_buf;

	node = list->first;
	if (node == NULL)
		list->first = push_node;
	else {
		while (1) {
			if (node->next == NULL) {
				node->next = push_node;
				push_node->next = NULL;
				break;
			}
			swap_buf = node->next;
			node = swap_buf;
		}
	}
}

void inspect_list(struct yu_list *list)
{
	struct yu_node *node;
	node = list->first;
	/* empty list */
	if (node == NULL)
		return;
	while (1) {
		/* last node */
		if (node->next == NULL) {
			printf("%d\n", node->num);
			break;
		} else {
			printf("%d, ", node->num);
		}
	}
}

struct yu_list *new_list()
{
	struct yu_list list = {.first = NULL};
	return &list;
}

struct yu_node *new_node(int num)
{
	struct yu_node *node;
	node = (struct yu_node *)calloc(1, sizeof(struct yu_node));
	node->num = num;
	node->next = NULL;
	return node;
}

int main() {
  struct yu_list *list = new_list();
  push_list(list, new_node(1));
  push_list(list, new_node(2));
  push_list(list, new_node(3));
  inspect_list(list);
  return 0;
}
