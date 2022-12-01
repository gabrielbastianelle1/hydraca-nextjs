import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const SwaggerUI = dynamic<{
    spec: any
}>(import('swagger-ui-react'), { ssr: false })

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
    const spec: Record<string, any> = createSwaggerSpec({
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'HYDRACA API DOCUMENTATION',
                version: '1.0.0',
                description:
                    'GITHUB REPOSITORY: [HYDRACA repository](https://github.com/gabrielbastianelle1/hydraca-nextjs)'
            },
            tags: [
                {
                    name: 'auth',
                    description: 'everything about signin and signup'
                },
                {
                    name: 'user',
                    description: 'everything about user'
                },
                {
                    name: 'admin',
                    description: 'everything about admin'
                }
            ],
            components: {
                schemas: {
                    User: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'integer'
                            },
                            role: {
                                type: 'string',
                                description: 'if the user is admin or not',
                                enum: ['admin', 'user']
                            },
                            name: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            },
                            password: {
                                type: 'string'
                            },
                            birthday: {
                                type: 'string',
                                format: 'data-time'
                            },
                            state: {
                                type: 'boolean'
                            },
                            height: {
                                type: 'integer'
                            },
                            weight: {
                                type: 'integer'
                            },
                            imc: {
                                type: 'integer'
                            },
                            sensitivity: {
                                type: 'integer'
                            },
                            glucoserange: {
                                type: 'array',
                                items: {
                                    type: 'integer'
                                },
                                description:
                                    'array with to positions only, the fist is the minimum glucose, and second maximum'
                            }
                        }
                    },
                    Register: {
                        type: 'object',
                        properties: {
                        name: {
                            type: 'string'
                        },
                        email: {
                            type: 'string'
                        },
                        password: {
                            type: 'string'
                        },
                        birthday: {
                            type: 'string',
                            format: 'data-time'
                        }
                     }
                    },
                    Diabetes: {
                        type: 'object',
                        properties: {
                        type: {
                            type: String,
                            required: [true, 'type required']
                        },
                        state: {
                            type: Boolean,
                            default: true
                        }
                        }
                    },
                    Therapy: {
                        type: 'object',
                        properties: {
                            name: {
                                type: String,
                                required: [true, 'name required'],
                                unique: [true, 'name already used']
                            },
                            description: {
                                type: String,
                                required: [true, 'description required']
                            },

                            state: {
                                type: Boolean,
                                default: true
                            }
                        }
                    },
                    Food: {
                        type: 'object',
                        properties: {
                            name: {
                                type: String,
                                required: [true, 'name required'],
                                unique: [true, 'name already used']
                            },
                            Hc: {
                                type: Number,
                                required: [true, 'Hc required']
                            },

                            state: {
                                type: Boolean,
                                default: true
                            }
                        }

                    }
                }
            }
        }
    })
    return {
        props: {
            spec
        }
    }
}

export default ApiDoc
