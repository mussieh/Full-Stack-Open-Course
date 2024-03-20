const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => (
    <>
        {parts.map((part) => (
            <Part key={part.id} part={part} />
        ))}
    </>
);

const Total = ({ parts }) => {
    return (
        <>
            <p>
                <strong>
                    total of{" "}
                    {parts
                        .map((part) => part.exercises)
                        .reduce((acc, cur) => acc + cur)}{" "}
                    exercises
                </strong>
            </p>
        </>
    );
};

const Course = ({ course }) => (
    <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </>
);

export default Course;
