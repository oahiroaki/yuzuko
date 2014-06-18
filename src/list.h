struct yu_objuct {
  unsigned int type;
  union {
    int number;
    size_t *value;
  }
};

struct yu_node {
  int num;
  struct yu_node *next;
};

struct yu_list {
  struct yu_node *first;
};