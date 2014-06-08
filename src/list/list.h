#ifndef LIST_H
#define LIST_H

#ifdef __cplusplus
extern "C" {
#endif

#include <stdlib.h>


/*
 * list_t node struct
 */
typedef struct list_node {
  struct list_node *prev;
  struct list_node *next;
  void *val;
} list_node_t;

/*
 * list_t struct
 */
typedef struct {
  list_node_t * head;
  list_node_t *tail;
  unsigned int len;
  void (*free)(void *val);
  int (*match)(void *a, void *b);
}

/*
 * list_t iterator struct
 */
typedef struct {
  list_node_t *next;
  list_direction_t direction;
} list_iterater_t;


// Node prototypes
list_node_t *
list_node_new(void *val);

// list_t prototypes
list_t *
list_new();

list_node_t *
list_push(list_t *self, list_node_t *node);
#ifdef __cplusplus
}
#endif

#endif

